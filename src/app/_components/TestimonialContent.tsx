import Image from 'next/image';

export interface twitterContent {
  twitter_name: string;
  twitter_username: string;
  twitter_profile_image: string;
  content: string;
  content_image?: string;
}

export const testimonialContent: twitterContent[] = [
  {
    twitter_name: 'Matt',
    twitter_username: '@mattuniox',
    twitter_profile_image: '/images/testimonials/mattuniox.png',
    content:
      "So far this week we've filed 12 DMCA takedowns with FB & Shopify because someone in China ripped off one of our brands PIXEL by PIXEL and is offering a 50% off sale. We've had numerous customers reach out and ask if it's one of our \"other\" websites. Once taken down, they republish our product pages on another website and launch ads via a new FB page.I don't understand why @Shopify has not developed better tools to combat this. @harleyf @tobiSame can be said for Facebook.",
  },
  {
    twitter_name: 'Karl Uljas',
    twitter_username: '@uljaskarl',
    twitter_profile_image: '/images/testimonials/uljaskarl.png',
    content:
      "Is there someone who can take down Shopify stores that are completely ripped off? The DMCA system at @Shopify @ShopifySupport has proven to be useless. Content is taken offline but it's reactivated with 2 clicks. 4 DMCAs deep, stores still active. Smh",
  },
  {
    twitter_name: 'Trevor Zheng',
    twitter_username: '@ecomTrevor',
    twitter_profile_image: '/images/testimonials/ecomtrevor.png',
    content:
      "1 year ago I found a website that ripped my site 1 for 1.Website Color Scheme, Layout, Theme, Everything was identical except the logo.DMCA striked their store tens of times and they ended up changing up their whole store.You aren't building a business copying someone else.",
  },
  {
    twitter_name: '۶ৎ',
    twitter_username: '@pictoresa',
    twitter_profile_image: '/images/testimonials/pictoressa.png',
    content:
      'BEWARE OF THIS SHOP. They literally just copied & removed my name/logo in the design. I assumed they got the design layout from my posters.Kindly report. THANK YOU!',
  },
  {
    twitter_name: 'Paul J',
    twitter_username: '@pauljauregui',
    twitter_profile_image: '/images/testimonials/pauljauregui.avif',
    content:
      'Is there a path via @Shopify to takedown storefronts that infringe on our trademarks, use our images, and claim to sell our products?Have a very blatant infringer. Small issue, just very blatant.',
  },
  {
    twitter_name: 'Jordan Jones',
    twitter_username: '@jordanjones_15',
    twitter_profile_image: '/images/testimonials/jordanjones_15.png',
    content:
      '@harleyf how can @Shopify facilitate a "business" to illegally carbon copy and infringe on a brands trademark? Left is real, right is fake.Shopify plus rep just sends us to a form - awful.',
  },
  {
    twitter_name: 'Jordan West',
    twitter_username: '@jordantwestecom',
    twitter_profile_image: '/images/testimonials/jordantwestecom.avif',
    content:
      'What do you guys do with scam sites? Looks like someone cloned one of our sites',
    content_image: '/images/testimonials/examples/jordantwestecom_example.avif',
  },
  {
    twitter_name: 'Daan Kroon',
    twitter_username: '@DaanEcom',
    twitter_profile_image: '/images/testimonials/DaanEcom.avif',
    content:
      "Anyone knows a DMCA claim agency on how to approach it the best towards Shopify? Or how to find the owner of a Shopify store (I know Sidn)One of my clients brand got everything copy pasted except from the logo. Even the about us story with the founder of the brand is copy pasted. They make claims they can not do, don't have a terms and conditions page and they can't even ship the products (as it custom and not existed). Insane how this is possible. @ShopifySupport",
  },
  {
    twitter_name: 'Eric Bandholz',
    twitter_username: '@bandholz',
    twitter_profile_image: '/images/testimonials/bandholz.avif',
    content:
      'Is there a better way for @Shopify to help block fraudulent websites?We reported "beardbrand-shop. com" last week and this one pops up immediately. Both on Shopify.cc @tobi @harleyf',
    content_image: '/images/testimonials/examples/bandholz_example.avif',
  },
  {
    twitter_name: 'aly ⸆⸉ loves taylor',
    twitter_username: '@mirrorballaly',
    twitter_profile_image: '/images/testimonials/mirrorballaly.avif',
    content:
      'can you guys report these on tiktok shop?? they literally stole my design lol',
    content_image: '/images/testimonials/examples/mirrorballaly_example.avif',
  },
  {
    twitter_name: 'Ariel',
    twitter_username: '@ariellovesbread',
    twitter_profile_image: '/images/testimonials/ariellovesbread.avif',
    content:
      'How do you guys find stores that rip your creatives/content? For the purpose of sending DMCAs',
  },
  {
    twitter_name: 'Steeze',
    twitter_username: '@SteezMayn',
    twitter_profile_image: '/images/testimonials/SteezMayn.avif',
    content:
      "Anyone have experience getting websites taken down? There's a website impersonating the brand, using same names, pics and products. They scam the customers and use an invalid email when people reach out",
  },
  // {
  //   twitter_name: 'Davie Fogarty',
  //   twitter_username: '@DavieForgarty',
  //   twitter_profile_image: '/images/DavieForgarty.png',
  //   content:
  //     "Anyone else struggling to get scam websites down on @Google @googledownunder ?! Hundreds of customers are now being scammed and Google doesn't seem to care. Our traditional ways of getting the site down (reporting through hosting, legal investigations, reporting to google have not worked).",
  // },
];

export function TestimonialHeader(testimonial: twitterContent) {
  return (
    <div className="mb-4 flex items-center">
      <div className="rounded-full bg-[#E6EAF5]">
        <div className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={testimonial.twitter_profile_image}
            alt="Testimonial"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </div>
      <div className="ml-2">
        <h3 className="text-sm font-bold">{testimonial.twitter_name}</h3>
        <p className="text-xs text-gray-500">{testimonial.twitter_username}</p>
      </div>
    </div>
  );
}

export function TestimonialBody(testimonial: twitterContent) {
  // Split content by @ symbol and wrap mentions in blue span
  const contentParts = testimonial.content.split(/(@\w+)/);

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-sm">
        {contentParts.map((part, i) =>
          part.startsWith('@') ? (
            <span key={i} className="text-blue-500">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
      <div className="relative h-40 w-full">
        {testimonial.content_image && (
          <Image
            src={testimonial.content_image}
            alt="Testimonial"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        )}
      </div>
    </div>
  );
}
