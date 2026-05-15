# ProjectName SDK exists test

import pytest
from checkemailorusernameforadatabreach_sdk import CheckEMailOrUsernameForADataBreachSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CheckEMailOrUsernameForADataBreachSDK.test(None, None)
        assert testsdk is not None
