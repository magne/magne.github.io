import * as fflip from 'fflip';

enum Feature {
  darkMode,
}

fflip.config({
  criteria: [],
  features: [
    {
      id: Feature.darkMode,
      enabled: false,
    },
  ],
});

function isFeatureEnabled(feature: Feature): boolean {
  return fflip.isFeatureEnabledForUser(feature, {});
}

export { Feature, isFeatureEnabled };
