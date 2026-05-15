<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK utility: result_headers

class CheckEMailOrUsernameForADataBreachResultHeaders
{
    public static function call(CheckEMailOrUsernameForADataBreachContext $ctx): ?CheckEMailOrUsernameForADataBreachResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
