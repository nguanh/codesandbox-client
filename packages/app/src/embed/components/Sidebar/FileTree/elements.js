import styled from 'styled-components';
import css from '@styled-system/css';

export const FileContainer = styled.div(props =>
  css(theme => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: 3,
    lineHeight: '24px',
    paddingLeft: theme.space[3] * (props.depth + 1),
    backgroundColor: props.isSelected ? 'grays.500' : 'transparent',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'grays.500',
    },
  }))
);

export const IconContainer = styled.span(
  css({
    display: 'inline-flex',
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',

    // thanks I hate it
    // had to add !important to because EntryIcon which has
    // all the icons has inline styles :(
    '> div': {
      display: 'flex !important',
    },
  })
);

export const FileName = styled.span(
  css({
    marginLeft: 1,
  })
);
