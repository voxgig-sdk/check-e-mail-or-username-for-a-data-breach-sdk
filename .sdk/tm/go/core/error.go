package core

type CheckEMailOrUsernameForADataBreachError struct {
	IsCheckEMailOrUsernameForADataBreachError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCheckEMailOrUsernameForADataBreachError(code string, msg string, ctx *Context) *CheckEMailOrUsernameForADataBreachError {
	return &CheckEMailOrUsernameForADataBreachError{
		IsCheckEMailOrUsernameForADataBreachError: true,
		Sdk:              "CheckEMailOrUsernameForADataBreach",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CheckEMailOrUsernameForADataBreachError) Error() string {
	return e.Msg
}
