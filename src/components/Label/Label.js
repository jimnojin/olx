import React from 'react';
import styled from 'styled-components';
import REQUEST_STATUS from '../../requests/RequestStatus';
import { COLORS } from '../../app/constants';

const Label = styled.label`
  display: inline-block;
  width: 60px;
  height: 26px;
  margin: 0;
  padding: 4px 8px;
  min-width: 70px;
  line-height: 18px;

  font-size: 12px;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;
  color: ${COLORS.white};
  background: ${COLORS.secondary.normal};
  border-radius: 3px;
`;

export const LabelDenied = Label.extend`
  background: ${COLORS.error.normal};
`;
export const LabelPending = Label.extend`
  background: ${COLORS.secondary.normal};
`;
export const LabelApproved = Label.extend`
  background: ${COLORS.success.normal};
`;

export default props => {
  const content = props.children || props.status;

  switch (props.status) {
    case REQUEST_STATUS.DENIED:
      return <LabelDenied>{content}</LabelDenied>;

    case REQUEST_STATUS.PENDING:
      return <LabelPending>{content}</LabelPending>;

    case REQUEST_STATUS.APPROVED:
      return <LabelApproved>{content}</LabelApproved>;

    default:
      return <Label>{content}</Label>;
  }
}