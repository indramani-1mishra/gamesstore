
import { Card } from "reactstrap";
import {
  Accordian,
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Button,
  PreviewCard,
} from "@/components/Component";
import Content from "@/layout/content/Content";
import Head from "@/layout/head/Head";

const Faq = () => {
  return (
    <>
      <Head title="FAQ" />
      <Content>
        <div className="content-page wide-sm m-auto">
          <BlockHead size="lg" wide="xs" className="mx-auto">
            <BlockHeadContent className="text-center">
              <div className="nk-block-head-sub">
                <span>FAQs</span>
              </div>
              <BlockTitle tag="h2" className="fw-normal">
                Frequently Asked Questions
              </BlockTitle>
              <BlockDes>
                <p className="lead">
                  Got a question? Cant find the answer youre looking for? Dont worry, drop us a line on our{" "}
                  <a
                    href="#contact"
                    onClick={(ev) => ev.preventDefault()}
                  >
                    contact page
                  </a>
                  .
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>

          <Block>
            <Card className="card">
              <Accordian />
            </Card>
          </Block>

          <Block>
            <PreviewCard>
              <div className="align-center flex-wrap flex-md-nowrap g-4">
                <div className="nk-block-image w-120px flex-shrink-0">
                  {/* SVG same as before */}
                </div>

                <BlockContent>
                  <div className="nk-block-content-head px-lg-4">
                    <h5>We’re here to help you!</h5>
                    <p className="text-soft">
                      Ask a question or file a support ticket, manage request, report an issues.
                      Our support team will get back to you by email.
                    </p>
                  </div>
                </BlockContent>

                <BlockContent className="flex-shrink-0">
                  <Button color="white" outline className="btn-outline-primary btn-dim">
                    Get Support Now
                  </Button>
                </BlockContent>
              </div>
            </PreviewCard>
          </Block>
        </div>
      </Content>
    </>
  );
};

export default Faq;
