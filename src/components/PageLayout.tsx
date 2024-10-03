"use client";
import Image from "next/image";
import styles from "../app/styles.module.css";
import { ReactNode } from "react";

const PageLayout = ({
  leftChild,
  imgProps,
}: {
  leftChild: ReactNode;
  imgProps: { src: string; alt?: string };
}) => {
  return (
    <ul className="flex w-full justify-between h-[100vh] overflow-y-clip p-2.5 space-x-[7.9375rem]">
      {/* // <ul className={styles.container}> */}

      <li className={`${styles.textSection} pl-[7.5rem] pt-[12.125rem]`}>
        {leftChild}
      </li>

      <li className="h-full">
        <Image
          src={imgProps.src} // Replace with your church image path
          alt={imgProps?.alt || ""}
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

export default PageLayout;
