"use client";
import Image from "next/image";
import styles from "./styles.module.css";

const SignUpPage = () => {
  return (
    <ul className="flex w-full justify-between h-[100vh] overflow-y-clip p-2.5 space-x-[7.9375rem]">
      {/* // <ul className={styles.container}> */}

      <li className={`${styles.textSection} pl-[7.5rem] pt-[12.125rem]`}>
        <h2 className={styles.textHeader}>Create an new account</h2>
        <p className={styles.textSubHeader}>
          It's easy! Just take a minute to provide the details.
        </p>
        <form>
          <div className={styles.form}>
            <div className={styles.halfField}>
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                className={styles.halfInput}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className={styles.halfField}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                className={styles.halfInput}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>

            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className={styles.form}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.passwordContainer}>
              <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              <span className={styles.eyeIcon}>
                <Image
                  className={styles.eyeIconImg}
                  src="/images/eye-logo.png" // Paths to your eye icons
                  alt="eye logo"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>

          <div className={styles.form}>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className={styles.checkbox}
              required
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <span className={styles.checkboxSpan}>Terms and Conditions</span>
            </label>
          </div>
          <div className={styles.form}>
            <button type="submit" className={styles.submitButton}>
              Continue
            </button>
          </div>

          <div className={styles.divider}>
            <hr />
            <span>or</span>
            <hr />
          </div>

          <div className={styles.form}>
            <button type="button" className={styles.googleButton}>
              <Image
                src="/images/google.png" // Path to your Google logo
                alt="Google Logo"
                width={20}
                height={20}
                className={styles.googleLogo}
              />
              Continue with Google
            </button>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              {" "}
              Already have an account? {""}{" "}
              <span className={styles.footerSpan}>
                <a href="/signin">Sign In</a>
              </span>
            </p>
          </div>
        </form>
      </li>

      <li className="h-full">
        <Image
          src="/images/church-frame.png" // Replace with your church image path
          alt="Church Congregation"
          width={1000}
          height={100}
          className="h-[100%] object-fill"
        />
        {/* <div className={styles.bibleVerseCard}>
          <p className="">
            “For I know the plans I have for you, declares the Lord, plans for
            welfare and not for evil, to give you a future and a hope. Then you
            will call upon me and come and pray to me, and I will hear you. You
            will seek me and find me, when you seek me with all your heart.”
          </p>
          <p>Jeremiah 29:11-13</p>
        </div>
        <div className={styles.blurEffect}></div> */}
      </li>
    </ul>
  );
};

export default SignUpPage;
