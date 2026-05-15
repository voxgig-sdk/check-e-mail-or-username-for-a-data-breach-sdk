<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK base feature

class CheckEMailOrUsernameForADataBreachBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CheckEMailOrUsernameForADataBreachContext $ctx, array $options): void {}
    public function PostConstruct(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function PostConstructEntity(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function SetData(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function GetData(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function GetMatch(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function SetMatch(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function PrePoint(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function PreSpec(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function PreRequest(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function PreResponse(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function PreResult(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function PreDone(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
    public function PreUnexpected(CheckEMailOrUsernameForADataBreachContext $ctx): void {}
}
