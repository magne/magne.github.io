import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { createRef, FunctionComponent, useState } from 'react';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import slugify from 'slugify';
import styled from 'styled-components';
import Bio from '../components/bio';
import { Container } from '../components/common';
import Layout from '../components/layout';
import ReadingProgress from '../components/reading-progress';
import SEO from '../components/seo';
import Toc from '../components/toc';
import { colors, media } from '../tokens';
import { IPost, ITag } from '../utils/models';

interface IPostTemplateProps {
  data: {
    primaryTag: ITag | null;
    post: IPost;
  };
  location: Location;
}

const PostContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0 !important;
`;

const LeftSidebar = styled.div<{ show?: boolean }>`
  min-width: 225px;
  max-width: 225px;
  transition: opacity 0.5s, z-index 0.5s;

  @media ${media.xl} {
    position: fixed;
    opacity: ${props => (props.show ? 1 : 0)};
    z-index: ${props => (props.show ? 1000 : -1)};
    background-color: ${colors.white};
    width: 100% !important;
    max-width: 100%;
    padding: 0 20px;
    margin-top: -5px;
    height: calc(100vh - 70px);
  }
`;

const PostContent = styled.div`
  margin-top: -5px;
  border-right: 1px ${colors.lightGreyishBlue} solid;
  border-left: 1px ${colors.lightGreyishBlue} solid;
  background-color: ${colors.white};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.03), 0 3px 46px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 1035px;
  max-width: 100%;

  li > a,
  p > a {
    color: ${props => props.theme.layout.linkColor};
    border-bottom: 2px ${props => props.theme.layout.linkColor} solid;
  }
  pre {
    margin: 30px 0;
  }
  blockquote {
    border-left: 4px ${props => props.theme.layout.primaryColor} solid;
    background-color: ${props => props.theme.layout.backgroundColor};
    margin: 30px 0;
    padding: 5px 20px;
    border-radius: 0.3em;
  }
  h3::before,
  h4::before,
  h5::before,
  h6::before {
    display: block;
    content: ' ';
    height: 90px;
    margin-top: -90px;
    visibility: hidden;
  }
  h2 {
    border-top: 1px solid ${colors.veryLightGrey2};
    margin-top: 44px;
    padding-top: 40px;
    line-height: 1.2;
  }
  code[class*='language-text'] {
    padding: 5px;
  }
  p > img {
    max-width: 100%;
    border-radius: 0.3em;
    margin: 30px 0;
  }
  hr {
    border-top: 1px solid ${colors.veryLightGrey2};
    border-bottom: 0;
    margin-top: 44px;
    margin-bottom: 40px;
  }
  .gatsby-resp-image-link {
    margin: 30px 0;
    max-width: 100%;
    .gatsby-resp-image-image {
      border-radius: 0.3em;
    }
  }
`;

const TocWrapper = styled.div`
  position: sticky;
  top: 70px;
  padding: 40px 30px 40px 0;
`;

const PostHeader = styled.header`
  padding: 40px;

  @media ${media.sm} {
    padding: 20px;
  }
`;

const FeaturedImage = styled(Img)`
  border-radius: 0;
  @media ${media.xl} {
    margin-left: -1px;
    margin-right: -1px;
  }
`;

const StyledPost = styled.section`
  padding: 40px;
  @media ${media.sm} {
    padding: 20px;
  }
`;

const PostMeta = styled.section`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  font-size: 0.9em;
`;

const PostTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

const PostFooter = styled.footer`
  background-color: ${colors.mostlyWhite};
  font-size: 0.8em;
  color: #666;
  padding: 40px;
  line-height: 1em;
  p {
    margin: 5px 0;
  }
`;

const FooterTagLink = styled(Link)`
  color: ${colors.black} !important;
  text-decoration: none;
  border-bottom: 0 !important;
`;

const PostAddition = styled.section`
  background-color: ${colors.white};
  border-top: 1px ${colors.lightGreyishBlue} solid;
  border-bottom: 1px ${colors.lightGreyishBlue} solid;
  z-index: 700;
  position: relative;
  padding: 40px;
`;

const PostAdditionContent = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const BioWrapper = styled.div`
  width: 50%;
  margin: auto;
  @media ${media.sm} {
    width: 100%;
  }
`;

const ToggleTocButton = styled.button`
  display: flex;
  position: fixed;
  justify-content: center;
  right: 20px;
  bottom: 20px;
  border-radius: 100%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.03), 0 3px 46px rgba(0, 0, 0, 0.1);
  border: 0;
  z-index: 5000;
  width: 50px;
  height: 50px;
  background-color: ${colors.veryDarkMostlyBlackBlue};
  color: ${colors.white};
  outline: none;
  @media (min-width: ${media.xl}) {
    display: none;
  }
`;

const PageTemplate: FunctionComponent<IPostTemplateProps> = ({ data, location }) => {
  const [showToc, setShowToc] = useState<boolean>(false);
  const post = data.post;
  const readingProgressRef = createRef<HTMLElement>();
  const primaryTag = data.primaryTag;
  const toggleToc = () => setShowToc(!showToc);

  return (
    <Layout bigHeader={false}>
      <SEO
        location={location}
        title={post.frontmatter.title}
        publishedAt={post.frontmatter.created}
        updatedAt={post.frontmatter.updated}
        tags={post.frontmatter.tags}
        description={post.frontmatter.excerpt}
        image={post.frontmatter.featuredImage?.childImageSharp.sizes.src ?? null}
      />
      <ReadingProgress target={readingProgressRef} color={primaryTag?.color ?? undefined} />
      <PostContainer>
        {post.headings.find(h => h.depth > 1) && (
          <>
            <LeftSidebar show={showToc}>
              <TocWrapper>
                <Toc onClick={toggleToc} />
              </TocWrapper>
            </LeftSidebar>
            <ToggleTocButton role={'button'} aria-label={'Toggle table of contents'} onClick={toggleToc}>
              {showToc ? <FaTimes /> : <FaAlignJustify />}
            </ToggleTocButton>
          </>
        )}
        <PostContent>
          <article className={'post'} ref={readingProgressRef}>
            <PostHeader>
              <PostMeta>
                {post.frontmatter.tags.length > 0 && (
                  <Link to={`/tag/${slugify(post.frontmatter.tags[0], { lower: true })}`}>{post.frontmatter.tags[0]}</Link>
                )}
                <time dateTime={post.frontmatter.created}>{post.frontmatter.createdPretty}</time>
              </PostMeta>
              <PostTitle>{post.frontmatter.title}</PostTitle>
            </PostHeader>
            {post.frontmatter.featuredImage && <FeaturedImage sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />}
            <StyledPost className={'post'}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </StyledPost>
            <PostFooter>
              <p>
                Published under&nbsp;
                {post.frontmatter.tags.map((tag, index) => (
                <span key={index}>
                  <FooterTagLink to={`/tag/${slugify / (tag, { lower: true })}`}>{tag}</FooterTagLink>
                  {post.frontmatter.tags.length > index + 1 && <>, </>}
                </span>
              ))}
                &nbsp;on <time dateTime={post.frontmatter.created}>{post.frontmatter.createdPretty}</time>.
              </p>
              {post.frontmatter.updated !== post.frontmatter.created && (
                <p>
                  Last updated on <time dateTime={post.frontmatter.updated}>{post.frontmatter.updatedPretty}</time>.
                </p>
              )}
            </PostFooter>
          </article>
        </PostContent>
      </PostContainer>
      <PostAddition>
        <PostAdditionContent>
          <BioWrapper>
            <Bio textAlign={'center'} showName={true} />
          </BioWrapper>
        </PostAdditionContent>
      </PostAddition>
    </Layout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PrimaryTag($postId: String!, $primaryTag: String!) {
    post: mdx(id: { eq: $postId }) {
      headings {
        depth
      }
      frontmatter {
        title
        path
        tags
        excerpt
        created
        createdPretty: created(formatString: "DD MMMM, YYYY")
        updated
        updatedPretty: updated(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 800, quality: 75) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      body
    }
    primaryTag: tags(name: { eq: $primaryTag }) {
      name
      color
    }
  }
`;
