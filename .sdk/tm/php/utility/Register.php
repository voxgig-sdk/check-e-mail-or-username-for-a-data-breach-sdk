<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CheckEMailOrUsernameForADataBreachUtility::setRegistrar(function (CheckEMailOrUsernameForADataBreachUtility $u): void {
    $u->clean = [CheckEMailOrUsernameForADataBreachClean::class, 'call'];
    $u->done = [CheckEMailOrUsernameForADataBreachDone::class, 'call'];
    $u->make_error = [CheckEMailOrUsernameForADataBreachMakeError::class, 'call'];
    $u->feature_add = [CheckEMailOrUsernameForADataBreachFeatureAdd::class, 'call'];
    $u->feature_hook = [CheckEMailOrUsernameForADataBreachFeatureHook::class, 'call'];
    $u->feature_init = [CheckEMailOrUsernameForADataBreachFeatureInit::class, 'call'];
    $u->fetcher = [CheckEMailOrUsernameForADataBreachFetcher::class, 'call'];
    $u->make_fetch_def = [CheckEMailOrUsernameForADataBreachMakeFetchDef::class, 'call'];
    $u->make_context = [CheckEMailOrUsernameForADataBreachMakeContext::class, 'call'];
    $u->make_options = [CheckEMailOrUsernameForADataBreachMakeOptions::class, 'call'];
    $u->make_request = [CheckEMailOrUsernameForADataBreachMakeRequest::class, 'call'];
    $u->make_response = [CheckEMailOrUsernameForADataBreachMakeResponse::class, 'call'];
    $u->make_result = [CheckEMailOrUsernameForADataBreachMakeResult::class, 'call'];
    $u->make_point = [CheckEMailOrUsernameForADataBreachMakePoint::class, 'call'];
    $u->make_spec = [CheckEMailOrUsernameForADataBreachMakeSpec::class, 'call'];
    $u->make_url = [CheckEMailOrUsernameForADataBreachMakeUrl::class, 'call'];
    $u->param = [CheckEMailOrUsernameForADataBreachParam::class, 'call'];
    $u->prepare_auth = [CheckEMailOrUsernameForADataBreachPrepareAuth::class, 'call'];
    $u->prepare_body = [CheckEMailOrUsernameForADataBreachPrepareBody::class, 'call'];
    $u->prepare_headers = [CheckEMailOrUsernameForADataBreachPrepareHeaders::class, 'call'];
    $u->prepare_method = [CheckEMailOrUsernameForADataBreachPrepareMethod::class, 'call'];
    $u->prepare_params = [CheckEMailOrUsernameForADataBreachPrepareParams::class, 'call'];
    $u->prepare_path = [CheckEMailOrUsernameForADataBreachPreparePath::class, 'call'];
    $u->prepare_query = [CheckEMailOrUsernameForADataBreachPrepareQuery::class, 'call'];
    $u->result_basic = [CheckEMailOrUsernameForADataBreachResultBasic::class, 'call'];
    $u->result_body = [CheckEMailOrUsernameForADataBreachResultBody::class, 'call'];
    $u->result_headers = [CheckEMailOrUsernameForADataBreachResultHeaders::class, 'call'];
    $u->transform_request = [CheckEMailOrUsernameForADataBreachTransformRequest::class, 'call'];
    $u->transform_response = [CheckEMailOrUsernameForADataBreachTransformResponse::class, 'call'];
});
