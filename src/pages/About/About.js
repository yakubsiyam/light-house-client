import React from "react";
import about from "../../images/about.jpg";
import about1 from "../../images/about1.png";

const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center my-5">
        <div className="col-md-6">
          <img className="img-fluid" src={about} alt="banner" />
        </div>
        <div className="col-md-6">
          <div>
            <p className="text-prime mb-4">Welcome to Light House</p>
            <h1 className=" fw-bold mt-4 banner-text-shadow">
              How to Use Lighting to Pull a Room Together
            </h1>

            <small className="text-secondary">
              We could have the most modern furniture, the loveliest carpets and
              curtains, beautifully painted walls, and countless fashionable
              home accessories, but if the lighting in our home is poor, all of
              that won’t matter.Believe it or not, the lights in our home play a
              major role in decoration.
            </small>
          </div>
        </div>
      </div>

      <div className="row justify-content-between align-items-center my-5">
        <div className="col-md-6">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  About Light House
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  When founders Siyam remodeled their home, they started the way
                  these projects often do: with a tall stack of magazines and
                  referrals for home professionals from people they knew. But
                  after those piles of torn out pages failed to make their dream
                  a reality, they felt stuck. There had to be a better way.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Light House Return Policy
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  When you shop on Light House, you can purchase items sold
                  directly by Light House or by third-party sellers who list
                  their products for sale on our marketplace. In either case,
                  our goal is to provide you with an outstanding customer
                  experience every time you shop with us. This Return Policy
                  covers all items purchased through Light House.com. It's
                  designed to give you confidence that we stand behind the
                  products on our marketplace and to make returns easy if you're
                  not fully satisfied with an item.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Refunds
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  If you choose to get a refund for eligible items, you'll be
                  refunded the price of the product and applicable sales tax.
                  For damaged or defective items (and any other items from that
                  order if they are part of a set), you will also receive a
                  refund for any amount you may have paid through Light House to
                  have the item shipped to you. For items that were not damaged
                  or defective, you will be responsible for the return shipping
                  costs; if you use a return shipping label provided by Light
                  House or the seller, the shipping costs will be deducted from
                  the amount of the refund due to you.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <img className="img-fluid" src={about1} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default About;
