# CheckEMailOrUsernameForADataBreach SDK utility: feature_add
module CheckEMailOrUsernameForADataBreachUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
