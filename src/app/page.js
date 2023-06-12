
import styles from "./page.module.css"
import Title from '@/components/body1/Title'
    import Testimonials from "@/components/testimonials/Testimonials"

export default function Home() {

  return (
    <>
      <Title/>
    <Testimonials />
    <div className={styles.div} >
      hello
    </div>
    </>
  )
}
