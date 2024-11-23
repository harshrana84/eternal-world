import CTABlock from "components/cta-block";
import Button from "components/button";
import ArrowRight from "assets/icons/arrow-right";

export default function CallToAction() {
  return (
    <CTABlock background="https://ap-teapoz.myshopify.com/cdn/shop/files/22_2.png?v=1685929277">
      <h3 className="mb-6 font-normal text-center text-black text-24px sm:text-36px lg:text-left">
        Fast, Free Shipping,
        <br />
        <span className="font-semibold">Contactless Delivery.</span>
      </h3>
      <p className="mb-10 text-center text-black lg:text-left">
        Try it for now, risk free!
      </p>

      <Button variant="elevation">
        <span className="mr-2">Shop Now</span> <ArrowRight width="12px" />
      </Button>
    </CTABlock>
  );
}
