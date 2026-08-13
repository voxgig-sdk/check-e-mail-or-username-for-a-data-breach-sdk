# CheckEMailOrUsernameForADataBreach SDK feature factory

from checkemailorusernameforadatabreach_sdk.feature.base_feature import CheckEMailOrUsernameForADataBreachBaseFeature
from checkemailorusernameforadatabreach_sdk.feature.test_feature import CheckEMailOrUsernameForADataBreachTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CheckEMailOrUsernameForADataBreachBaseFeature(),
        "test": lambda: CheckEMailOrUsernameForADataBreachTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
