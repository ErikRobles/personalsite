import React from 'react';
import { withProtected } from '../hooks/routes';

function SignUp() {
  return <div>signup</div>;
}

export default withProtected(SignUp);
