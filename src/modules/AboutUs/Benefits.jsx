import React from "react";
import { ReactComponent as Car } from "../../images/mainBenefits/Car.svg";
import { ReactComponent as CreditCard } from "../../images/mainBenefits/CreditCard.svg";
import { ReactComponent as Cube } from "../../images/mainBenefits/Cube.svg";
import { ReactComponent as Happy } from "../../images/mainBenefits/Happy.svg";
import { ReactComponent as Percentage } from "../../images/mainBenefits/percentage.svg";
import {
  BenefitsBlockDIV,
  BenefitsSVGContainer,
  BenefitsSVGItemDIV,
  BenefitsTextContainer,
  BenefitsTextP,
  IconWraper,
  TextSecond,
} from "./AboutUsStyled";

const benefitsData = [
  { Icon: Car, description: "Доставка Новою поштою 1-3 дні" },
  { Icon: CreditCard, description: " Готівкова та безготівкова (ФОП) " },
  { Icon: Cube, description: "Вигідні акційні пропозиції та знижки" },
  { Icon: Happy, description: "Поповнення товару кожні 2 тижня" },
  { Icon: Percentage, description: "Якісна консультація та відмінний сервіс" },
];

const Benefits = () => {
  return (
    <BenefitsBlockDIV>
      <BenefitsSVGContainer>
        {benefitsData.map(({ Icon, description }, index) => (
          <BenefitsSVGItemDIV key={index}>
            <IconWraper>
              <Icon />
            </IconWraper>
            <BenefitsTextP>{description}</BenefitsTextP>
          </BenefitsSVGItemDIV>
        ))}
      </BenefitsSVGContainer>
      <BenefitsTextContainer>
        <TextSecond>
          Індивідуальний підхід, постійна онлайн підтримка менеджерів та їхня
          експертність – саме те, що є в нас! Ми гарантуємо високий та якісний
          сервіс.
        </TextSecond>
        <TextSecond>Саме ми - твій єдиний надійний постачальник!</TextSecond>
      </BenefitsTextContainer>
    </BenefitsBlockDIV>
  );
};

export default Benefits;
