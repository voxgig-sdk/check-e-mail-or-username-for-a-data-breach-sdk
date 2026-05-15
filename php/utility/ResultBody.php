<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK utility: result_body

class CheckEMailOrUsernameForADataBreachResultBody
{
    public static function call(CheckEMailOrUsernameForADataBreachContext $ctx): ?CheckEMailOrUsernameForADataBreachResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
