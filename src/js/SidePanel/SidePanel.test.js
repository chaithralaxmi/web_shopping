import SidePanel from './SidePanel';

describe('SidePanel', () => {
    it('should render the side panel', () => {
        const sidepanel = new SidePanel();
        const el = sidepanel.render();
        const sidepanelEl = el.querySelector('#body');
        expect(sidepanelEl).not.toBeNull();
    });
});