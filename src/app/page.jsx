"use client"
import styles from "./Login.module.css"
import Image from "next/image";

const Login = () => {

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.leftside}>
          <Image className={styles.logo} src="/LogoSemFundo.png" alt="Logo" width={400} height={400} />
          <p>Cadastre-se agora e receba as melhores ofertas de serviço médico do país!</p>
        </div>
        <div className={styles.rightside}>
          <h1 className={styles.title}>vitor gay</h1>
          <form action="" className={styles.form}>
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="password" placeholder="Senha" className={styles.input} />
            <button className={styles.button}>Entrar</button>
            <div className={styles.links}>
              <a href="#">Esqueceu a senha? clique aqui</a>
              <a href="#">Cadastre-se</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login