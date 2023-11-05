import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/processes/user-process/user-selectors';
import { AuthStatuses } from '../../const/common-const';
import { getCurrentTasksAction } from '../../store/api-actions/task-api-actions';
import { TasksPagination } from '../../const/api-const';

export interface InitProps {
  children?: React.ReactNode;
}

function Init({ children }: InitProps) {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isUserLoggedIn = authStatus === AuthStatuses.Auth;

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(getCurrentTasksAction({
        quantityPerPage: TasksPagination.QuantityPerPage,
        pageNumber: TasksPagination.PageNumber
      }));
    }
  });

  return children;
}

export default Init;
