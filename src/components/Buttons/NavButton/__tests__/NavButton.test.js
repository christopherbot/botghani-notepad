import React from 'react'
import NavButton from '../NavButton'
import { shallow } from 'enzyme'

describe('NavButton', () => {
    let toggleNav = () => {};
    let isNavOpen = true;
    let renderedNavButton;
    
    beforeEach(() => {
      props = {
        toggleNav,
        isNavOpen,
      };
  
      renderedNavButton = shallow(<NavButton {...props} />);
    });
    
    it('should render button icon with necessary props passed in', () => {
      expect(renderedNavButton).toMatchSnapshot();
    });
    
    it('should invoke function passed in through props on press', () => {
      nativeButton.simulate('press');
  
      expect(props.toggleNav).toHaveBeenCalledTimes(1);
    });
})