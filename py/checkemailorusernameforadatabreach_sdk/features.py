# CheckEMailOrUsernameForADataBreach SDK feature factory

from checkemailorusernameforadatabreach_sdk.feature.base_feature import CheckEMailOrUsernameForADataBreachBaseFeature
from checkemailorusernameforadatabreach_sdk.feature.ratelimit_feature import CheckEMailOrUsernameForADataBreachRatelimitFeature
from checkemailorusernameforadatabreach_sdk.feature.retry_feature import CheckEMailOrUsernameForADataBreachRetryFeature
from checkemailorusernameforadatabreach_sdk.feature.test_feature import CheckEMailOrUsernameForADataBreachTestFeature
from checkemailorusernameforadatabreach_sdk.feature.timeout_feature import CheckEMailOrUsernameForADataBreachTimeoutFeature


_FEATURES = {
    "base": lambda: CheckEMailOrUsernameForADataBreachBaseFeature(),
    "ratelimit": lambda: CheckEMailOrUsernameForADataBreachRatelimitFeature(),
    "retry": lambda: CheckEMailOrUsernameForADataBreachRetryFeature(),
    "test": lambda: CheckEMailOrUsernameForADataBreachTestFeature(),
    "timeout": lambda: CheckEMailOrUsernameForADataBreachTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
