/// <reference types="vite/client" />

declare module '@swoga/vue-collapsible-panel' {
    import VueCollapsiblePanelGroup from '@swoga/vue-collapsible-panel/components/VueCollapsiblePanelGroup'
    import VueCollapsiblePanel from '@swoga/vue-collapsible-panel/components/VueCollapsiblePanel'
    function install (Vue);
    export default install
    export {
        VueCollapsiblePanelGroup,
        VueCollapsiblePanel,
    }
}

declare module "*.jxl" {
    const src: string
    export default src
}