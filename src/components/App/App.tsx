import { classNames } from "utils/classNames/classNames";

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <p className={classNames('test', {}, [])}>Hello world!</p>
      </div>
    </div>
  )
}

export default App;