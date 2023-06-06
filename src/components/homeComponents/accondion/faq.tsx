import Questions from "./question";

const Faq = () => {
  return (
    <div className="text-center max-w-auto  p-4 max-w-[700px] ml-auto mr-auto lg:max-w-[1000px]">
      <h1 className="text-black text-left w-[100px] pl-2 mx-auto font-bold text-2xl border-l-2 border-gray-800 md:w-[200px]">
        FAQs
      </h1>
      <Questions
        heading="How does URL shortening work ?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
      <Questions
        heading="Is it necessary to create an account to use the URL shortening service ?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
      <Questions
        heading="Are the shortened links permanent? Will they expire ?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
      <Questions
        heading="Are there any limitations on the number of URLs I can shorten ?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
      <Questions
        heading="Can I customize the shortened URLs to reflect my brand or content?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
      <Questions
        heading="Can I track the performance of my shortened URLs?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
      <Questions
        heading="How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
      <Questions
        heading="What is a QR code and what can it do?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
      <Questions
        heading="Is there an API available for integrating the URL shortening service into my own applications or websites?"
        description="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
      />
    </div>
  );
};

export default Faq;
