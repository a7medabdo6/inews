/* eslint-disable @next/next/no-img-element */
import baseUrl from "@/baseUrl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [social, setSocial] = useState([]);
  const [categories, setCategories] = useState([]);
  const [settings, setSettings] = useState({});

  const getSocialMedia = async () => {
    const { data } = await baseUrl.get(
      "http://vps97897.serveur-vps.net/settings/links/"
    );
    setSocial(data.results);
  };

  const fetchLinks = async () => {
    const { data } = await baseUrl.get(
      "http://vps97897.serveur-vps.net/category/"
    );
    setCategories(data?.results);
  };

  const fetchSettings = async () => {
    const { data } = await baseUrl.get("/settings/");
    setSettings(data?.results[0]);
  };

  const handleSubscribe = () => {
    setIsSubscribe(true);

    setTimeout(() => {
      setIsSubscribe(false);
    }, 10000);
  };

  useEffect(() => {
    getSocialMedia();
    fetchLinks();
    fetchSettings();
  }, []);

  return (
    <footer className="bg-white pt-5 pb-4 mb-lg-0 mt-5">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center gap-4">
            <img
              src={settings?.footer_logo}
              alt="i-news"
              width={130}
              height={40}
            />
            <p
              className="text-black fw-bold text-center"
              style={{
                lineHeight: "30px",
              }}
              dangerouslySetInnerHTML={{ __html: settings?.footer_short_desc }}
            />

            <div className="d-flex justify-content-center align-items-center gap-3">
              {social?.map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="__blank"
                    className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <img
                      src={item.logo}
                      alt={item.name_ar}
                      width={24}
                      height={24}
                    />
                  </a>
                );
              })}
              {/* <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_twitter.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_youtube.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_telegram.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_linkedin.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_instagram.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div> */}
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-3 pe-5 my-5 my-lg-0">
            <h5 className="fw-bold mb-3 d-flex">عنا</h5>
            <div className="d-flex flex-row flex-md-column flex-wrap justify-content-start align-items-start gap-3">
              <Link href="/who-are-we">من نحن</Link>
              <Link href="/terms-and-conditions">الأحكام والشروط</Link>
              <Link href="/privacy-policy">سياسة الخصوصية</Link>
              <Link href="/contact-us">تواصل معنا</Link>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-3 pe-5 pe-lg-0">
            <h5 className="fw-bold mb-3">الأقسام</h5>
            <div className="d-flex justify-content-start align-items-center gap-4">
              <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                {categories?.slice(0, 3)?.map((category) => (
                  <Link key={category.id} href={`/categories/${category.id}`}>
                    {category.name}
                  </Link>
                ))}
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                {categories?.slice(3, 6)?.map((category) => (
                  <Link key={category.id} href={`/categories/${category.id}`}>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-4 my-5 my-lg-0 px-5 px-lg-0">
            <h5 className="fw-bold mb-3">اشترك بالنشرة البريدية</h5>
            <input
              className="w-100"
              type="text"
              placeholder="البريد الإلكتروني"
            />
            <button
              className="btn btn-primary rounded-0 w-100 fs-5"
              onClick={handleSubscribe}
            >
              اشترك
            </button>
          </div>
        </div>

        {isSubscribe && (
          <div
            className="alert alert-success position-absolute start-0 d-flex justify-content-center align-items-center gap-3 text-white rounded-0 fs-6"
            style={{ top: "208px", backgroundColor: "#00D26A" }}
            role="alert"
          >
            <Image
              src="/images/icons/right_icon.svg"
              alt="..."
              width={32}
              height={32}
            />
            <span>تم الاشتراك في النشرة البريدية بنجاح</span>
          </div>
        )}
      </div>
      <div
        className="copy-right mt-4 py-4 text-center"
        style={{
          borderTop: "1px solid #D2D2D2",
        }}
      >
        <p>جميع الحقوق محفوظة © 2023 شبكة آي نيوز الفضائية</p>
      </div>
    </footer>
  );
};

export default Footer;
