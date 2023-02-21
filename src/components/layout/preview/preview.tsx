import { FC } from "react";
import useCurrentStoreStore from "@/store/current-store/store";
import Text from "@/components/ui/text";
import s from "./preview.module.css";
import shareSrc from "./../../../../public/share.svg";
import documentSrc from "./../../../../public/document.svg";

const Preview: FC = () => {
  const { name, nickname } = useCurrentStoreStore();

  return (
    <section className={s.wrapper}>
      <div className={s.top}>
        <Text className={s.title} isBold>
          Preview
        </Text>
      </div>

      <div className={s.container}>
        <article className={s.phone}>
          <div className={s.top}>
            <div className={s.shareWrapper}>
              <button className={s.share}>
                <img src={shareSrc} alt="share" />
              </button>
            </div>

            <div className={s.info}>
              <div className={s.avatar}>
                <Text className={s.name} view="xl">
                  {name[0]}
                </Text>
              </div>

              <Text className={s.storeName} view="s" isBold>
                {name}
              </Text>

              <Text className={s.storeDescription} view="xs">
                Description
              </Text>
            </div>
          </div>

          <div className={s.bottom}>
            {new Array(4).fill("").map((_, index) => {
              return (
                <div key={index} className={s.fileItem}>
                  <div className={s.icon}>
                    <img src={documentSrc} alt={`file-${index}`} />
                  </div>

                  <Text className={s.title} view="m">
                    -
                  </Text>

                  <Text className={s.title} view="m">
                    -
                  </Text>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Preview;
