import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiSkipPrevious } from "react-icons/bi";
import { RiSkipForwardMiniFill } from "react-icons/ri";
import HTMLFlipBook from "react-pageflip";
import childhood2 from "../../assets/books/Childhood ana Youth 2nd.jpg";
import childhood1 from "../../assets/books/Childhood ana Youth.jpg";
import lifecycle2 from "../../assets/books/HIS CIRCLE OF LIFE 2nd.jpg";
import lifecycle1 from "../../assets/books/HIS CIRCLE OF LIFE.jpg";
import loving2 from "../../assets/books/In Loving Memory 2nd.jpg";
import loving1 from "../../assets/books/In Loving Memory.jpg";
import lhistory2 from "../../assets/books/LIFE HISTORY in picture 2nd.jpg";
import lhistory from "../../assets/books/LIFE HISTORY in picture.jpg";
import lhistoryjohn2 from "../../assets/books/LIFE HISTORY OF John smith 2nd.jpg";
import lhistoryjohn from "../../assets/books/LIFE HISTORY OF John smith.jpg";
import loveLife2 from "../../assets/books/Love and Life 2nd.jpg";
import loveLife from "../../assets/books/Love and Life.jpg";
import page29 from "../../assets/books/Obituary Book Golden back Cover.jpg";
import {
  default as page1,
  default as page11,
} from "../../assets/books/Page 1.jpg";
import page9 from "../../assets/books/Page 10.jpg";
import page10 from "../../assets/books/Page 11.jpg";
import page12 from "../../assets/books/Page 12.jpg";
import page13 from "../../assets/books/Page 13.jpg";
import page14 from "../../assets/books/Page 14.jpg";
import page15 from "../../assets/books/Page 15.jpg";
import page16 from "../../assets/books/Page 16.jpg";
import page17 from "../../assets/books/Page 17.jpg";
import page18 from "../../assets/books/Page 18.jpg";
import page19 from "../../assets/books/Page 19.jpg";
import page2 from "../../assets/books/Page 2.jpg";
import page20 from "../../assets/books/Page 20.jpg";
import page21 from "../../assets/books/Page 21.jpg";
import page22 from "../../assets/books/Page 22.jpg";
import page23 from "../../assets/books/Page 23.jpg";
import page24 from "../../assets/books/Page 24.jpg";
import page25 from "../../assets/books/Page 25.jpg";
import page26 from "../../assets/books/Page 26.jpg";
import page27 from "../../assets/books/Page 27.jpg";
import page28 from "../../assets/books/Page 28.jpg";
import page30 from "../../assets/books/Page 29.jpg";
import page3 from "../../assets/books/Page 3.jpg";
import page31 from "../../assets/books/Page 30.jpg";
import page32 from "../../assets/books/Page 31.jpg";
import page33 from "../../assets/books/Page 32.jpg";
import page4 from "../../assets/books/Page 5.jpg";
import page5 from "../../assets/books/Page 6.jpg";
import page6 from "../../assets/books/Page 7.jpg";
import page7 from "../../assets/books/Page 8.jpg";
import page8 from "../../assets/books/Page 9.jpg";
import Styles from "./bookModal.module.scss";
import { PageCover } from "./PageCover";
export default function BookModal(props) {
  const book = useRef();
  const [images, setImages] = useState([
    {
      id: 1,
      name: "childhood1",
      location: childhood1,
    },
    {
      id: 2,
      name: "childhood2",
      location: childhood2,
    },
    {
      id: 3,
      name: "lifecycle1",
      location: lifecycle1,
    },
    {
      id: 4,
      name: "lifecycle2",
      location: lifecycle2,
    },
    {
      id: 5,
      name: "loving1",
      location: loving1,
    },
    {
      id: 6,
      name: "loving2",
      location: loving2,
    },
    {
      id: 7,
      name: "lhistory",
      location: lhistory,
    },
    {
      id: 8,
      name: "lhistory2",
      location: lhistory2,
    },
    {
      id: 9,
      name: "lhistoryjohn",
      location: lhistoryjohn,
    },
    {
      id: 10,
      name: "lhistoryjohn2",
      location: lhistoryjohn2,
    },
    {
      id: 11,
      name: "loveLife",
      location: loveLife,
    },
    {
      id: 12,
      name: "loveLife2",
      location: loveLife2,
    },
    {
      id: 13,
      name: "page1",
      location: page1,
    },
    {
      id: 14,
      name: "page2",
      location: page2,
    },
    {
      id: 15,
      name: "page3",
      location: page3,
    },
    {
      id: 16,
      name: "page4",
      location: page4,
    },
    {
      id: 17,
      name: "page5",
      location: page5,
    },
    {
      id: 18,
      name: "page6",
      location: page6,
    },
    {
      id: 19,
      name: "page1",
      location: page1,
    },
    {
      id: 20,
      name: "page7",
      location: page7,
    },
    {
      id: 21,
      name: "page8",
      location: page8,
    },
    {
      id: 22,
      name: "page9",
      location: page9,
    },
    {
      id: 23,
      name: "page10",
      location: page10,
    },
    {
      id: 24,
      name: "page11",
      location: page11,
    },
    {
      id: 25,
      name: "page12",
      location: page12,
    },
    {
      id: 26,
      name: "page13",
      location: page13,
    },
    {
      id: 27,
      name: "page14",
      location: page14,
    },
    {
      id: 28,
      name: "page15",
      location: page15,
    },
    {
      id: 29,
      name: "page16",
      location: page16,
    },
    {
      id: 30,
      name: "page17",
      location: page17,
    },
    {
      id: 31,
      name: "page18",
      location: page18,
    },
    {
      id: 32,
      name: "page19",
      location: page19,
    },
    {
      id: 33,
      name: "page20",
      location: page20,
    },
    {
      id: 34,
      name: "page21",
      location: page21,
    },
    {
      id: 35,
      name: "page22",
      location: page22,
    },
    {
      id: 36,
      name: "page23",
      location: page23,
    },
    {
      id: 37,
      name: "page24",
      location: page24,
    },
    {
      id: 38,
      name: "page25",
      location: page25,
    },
    {
      id: 39,
      name: "page26",
      location: page26,
    },
    {
      id: 40,
      name: "page27",
      location: page27,
    },
    {
      id: 41,
      name: "page28",
      location: page28,
    },
    {
      id: 411,
      name: "page28",
      location: page28,
    },
    {
      id: 44,
      name: "page30",
      location: page30,
    },
    {
      id: 45,
      name: "page31",
      location: page31,
    },
    {
      id: 46,
      name: "page32",
      location: page32,
    },
    {
      id: 47,
      name: "page33",
      location: page33,
    },

    {
      id: 43,
      name: "page29",
      location: page29,
    },
  ]);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: "999999999" }}
      >
        <Modal.Body>
          <HTMLFlipBook
            width={200}
            height={200}
            size="stretch"
            maxShadowOpacity={1}
            showCover={true}
            mobileScrollSupport={true}
            ref={book}
          >
            <PageCover>BOOK TITLE</PageCover>
            {images.map((img) => {
              return (
                <div className={Styles.pageDiv}>
                  <img
                    key={img.id}
                    height="100%"
                    width="100%"
                    src={img.location}
                    alt={img.name}
                    className={
                      img.id % 2 === 1 ? Styles.book_img : Styles.book_img_odd
                    }
                  ></img>
                </div>
              );
            })}
          </HTMLFlipBook>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center"
          style={{ borderTop: "none" }}
        >
          <Button
            className={Styles.prev_btn}
            onClick={() => book.current.pageFlip().flipPrev()}
          >
            <BiSkipPrevious></BiSkipPrevious>
          </Button>
          <Button
            className={Styles.next_btn}
            onClick={() => book.current.pageFlip().flipNext()}
          >
            <RiSkipForwardMiniFill></RiSkipForwardMiniFill>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
