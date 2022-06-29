import { FunctionComponent } from 'react';

interface TestProps {
  title: string;
  desc: string;
}
const test: FunctionComponent<TestProps> = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h1>{props.desc}</h1>
    </>
  )
}