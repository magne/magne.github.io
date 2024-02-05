// ts-ignore
import type { CollectionEntry, CollectionKey } from 'astro:content'
import { DateTime } from 'luxon'
import * as child from 'node:child_process'
import * as os from 'node:os'

const gitPubDate = (path: string): DateTime => {
  try {
    const stdout = child.execFileSync('git', ['log', '--diff-filter=A', '--follow', '--format=%aI', '--', path], {
      encoding: 'utf8'
    })
    const pubDate = stdout.trim().split(os.EOL).pop() ?? ''
    if (pubDate?.length > 0) {
      return DateTime.fromISO(pubDate)
    }
  } catch {}
  // Propably no committed yet. Use today's date
  return DateTime.local()
}

const gitUpdatedDate = (path: string): DateTime | undefined => {
  try {
    const updatedDate = child
      .execFileSync('git', ['log', '-1', '--format=%aI', '--', path], {
        encoding: 'utf8'
      })
      .trim()
    if (updatedDate?.length > 0) {
      return DateTime.fromISO(updatedDate)
    }
  } catch {}
  return undefined
}

export const repoDates = <C extends CollectionKey>(entry: CollectionEntry<C>) => {
  const path = `./src/content/${entry.collection}/${entry.id}`

  const pubDate = entry.data.pubDate.getTime() !== 0 ? DateTime.fromJSDate(entry.data.pubDate) : gitPubDate(path)
  entry.data = { ...entry.data, pubDate: pubDate.toJSDate() }

  const updatedDate = entry.data.updatedDate ? DateTime.fromJSDate(entry.data.updatedDate) : gitUpdatedDate(path)
  if (updatedDate && pubDate < updatedDate) {
    entry.data = { ...entry.data, updatedDate: updatedDate.toJSDate() }
  } else {
    delete entry.data.updatedDate
  }

  return entry
}
