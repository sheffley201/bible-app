import Heading from './components/Heading'
import Dropdown from './components/Dropdown'

function App() {

  return (
    <>
        <Heading />
        <Dropdown title="Choose Book..." >
            <a href="https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X">The Pragmatic Programmer</a>
            <a href="https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672">Refactoring</a>
            <a href="https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612">Design Patterns</a>
        </Dropdown>
    </>
  )
}

export default App
