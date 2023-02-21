import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = useSelector((state) => state.userData); // 로그인 정보 Redux

  return(           // 로그인 돼있느냐 ? ㅇㅋ 컴포넌트 보여줘 : 안돼 로그인하러가
    <Route {...rest} render={props => isLogin ? <Component {...props} /> :
        <Redirect to={{pathname:"/Login", state: { next: props.location.pathname } }} />} />
  );
}

export default PrivateRoute;