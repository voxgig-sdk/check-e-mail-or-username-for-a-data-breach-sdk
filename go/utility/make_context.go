package utility

import "github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/go/core"

func makeContextUtil(ctxmap map[string]any, basectx *core.Context) *core.Context {
	return core.NewContext(ctxmap, basectx)
}
