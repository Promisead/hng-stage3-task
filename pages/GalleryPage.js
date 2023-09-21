import React, { useEffect, useState } from "react";
import { Card, Input, Alert, Spin } from "antd";
import { ReactSortable } from "react-sortablejs";
import { useRouter } from "next/router";
import { Spincomponent } from "@/components/Spincomponent";
import styles from "@/styles/gallery.module.css";
import { auth } from "@/pages/api/firebase-config";
import { SearchComponent } from "@/components/SearchComponent";

const { Meta } = Card;

const GalleryPage = () => {
  const router = useRouter();
  const currentUser = auth.currentUser;
  // console.log(currentUser);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [imgLoading, setImgLoading] = useState(false);
  const [state, setState] = useState([
    { id: 1, name: "toyatasuv.jpg", tag: "toyota suv" },
    { id: 2, name: "blue.jpg", tag: "blue toyota" },
    { id: 3, name: "Northwest.jpg", tag: "Northwest Flight" },
    { id: 4, name: "train.jpg", tag: "red train" },
    { id: 5, name: "blackcar1.jpg", tag: "black car" },
    { id: 6, name: "graycar1.jpg", tag: "gray car" },
    { id: 7, name: "orangecar1.jpg", tag: "orange car" },
    { id: 8, name: "yellowcar1.jpg", tag: "yellow car" },
    { id: 9, name: "sportcar1.jpg", tag: "sport car" },
    { id: 10, name: "aero.jpg", tag: "aeroplane" },
    { id: 11, name: "minicar1.jpg", tag: "mini car" },
    { id: 12, name: "blackbike.jpg", tag: "black bike" },
    { id: 13, name: "carseats.jpg", tag: "car seats" },
    { id: 14, name: "redbike.jpg", tag: "red bike" },
    { id: 15, name: "nicebike.jpg", tag: "nice bike" },
    { id: 16, name: "bicycle.jpg", tag: "bicycle" },
    { id: 17, name: "alpha.jpg", tag: "alpha brown" },
    { id: 17, name: "trekking.jpg", tag: "man walking" },
  ]);

  useEffect(() => {
    if (!currentUser && currentUser === null) {
      setHasError(true);
      const pushUrl = () => {
        setInterval(() => {
          router.push("/");
        }, 4000);
      };
      // pushUrl();
      // console.error("You must be logged in");
    }
    // console.log("User is logged in and can access gallery");
  }, [currentUser]);

  return (
    <div className={styles.container}>
      {hasError ? (
        <Alert
          message="You are not allowed to access this gallery, Log in at the home page"
          banner
          type="error"
          closable
        />
      ) : null}
      <div className={styles.box}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Photo Gallery</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>
            {currentUser ? (
              <div>Welcome {currentUser?.email}</div>
            ) : (
              <div>
                <a style={{ color: "#7F265B" }} href="/">
                  Click here to Log In
                </a>
              </div>
            )}
          </h3>
        </div>
        <br />
        <SearchComponent />
        <br />
        <div className={styles.widgetcontainer}>
          {currentUser ? null : <Spincomponent />}
          <ReactSortable list={state} setList={setState}>
            {currentUser &&
              state?.map((item) => (
                <div className={styles.widget} key={item.id}>
                  <Card
                    className={styles.widgetCard}
                    style={{
                      width: "180px",
                      height: "180px",
                      marginBottom: 32,
                    }}
                    hoverable
                    // loading={imgLoading}
                    cover={
                      <img
                        className={styles.widgetImg}
                        onLoad={() => setImgLoading(true)}
                        src={`/${item?.name}`}
                      />
                    }
                  >
                    <Meta title={item?.tag} />
                  </Card>
                </div>
              ))}
          </ReactSortable>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
