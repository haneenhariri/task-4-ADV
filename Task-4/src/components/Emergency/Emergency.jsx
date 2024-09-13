import { Button, Container } from 'react-bootstrap'
import './Emergency.css'
import TitleComp from '../TitleComp/TitleComp'

export default function Emergency({textBtn}) {
  return (
    <section className='Emergency text-center py-5'>
       <Container>
          <div className='text-light text-center'>
            <TitleComp
            Ttitle={'In an emergency? Need help now?'}
            Tp={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} 
            />
          </div>
          <Button variant="outline-light btnH border-2 px-3 px-sm-5 py-2 fs-6 mt-4 rounded-1">{textBtn}</Button>
       </Container>
    </section>
  )
}
