"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Facebook, Heart, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Menu",
          id: "#featured-menu",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Order Now",
          id: "#final-conversion",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z5sx5l"
      logoAlt="The Pizza House & Donair Logo"
      brandName="The Pizza House & Donair"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      imagePosition="right"
      title="The Pizza You Didn't See Coming."
      description="Small-town favorite serving unforgettable pizza and savory donair that keeps people coming back."
      buttons={[
        {
          text: "Order Now",
          href: "#featured-menu",
        },
        {
          text: "View Menu",
          href: "#featured-menu",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-silver-stars-background_23-2150160753.jpg",
          alt: "Customer rating",
        },
        {
          src: "http://img.b2bpic.net/free-photo/5-star-customer-review_23-2151952994.jpg",
          alt: "Customer rating",
        },
        {
          src: "http://img.b2bpic.net/free-photo/diverse-people-showing-golden-star-rating-symbol_53876-71536.jpg",
          alt: "Customer rating",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-eating-sushi-park-picnic-nature_169016-22794.jpg",
          alt: "Customer rating",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-african-woman-glass-smiling-talking-phone_176420-12471.jpg",
          alt: "Happy Customer",
        },
      ]}
      avatarText="★★★★★ Trusted by locals"
      imageSrc="http://img.b2bpic.net/free-photo/close-up-delicious-slice-pizza_23-2149232896.jpg"
      imageAlt="Cinematic pizza cheese pull and donair slices"
      mediaAnimation="entrance-slide"
      fixedMediaHeight={true}
      marqueeItems={[
        {
          type: "text",
          text: "Fresh Ingredients",
        },
        {
          type: "text-icon",
          text: "Locally Loved",
          icon: Heart,
        },
        {
          type: "text",
          text: "Unforgettable Flavor",
        },
        {
          type: "text-icon",
          text: "Award-Winning",
          icon: Award,
        },
        {
          type: "text",
          text: "Handcrafted Daily",
        },
      ]}
    />
  </div>

  <div id="trust-bar" data-section="trust-bar">
      <MetricCardTwo
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "★★★★★",
          description: "Community Rating",
        },
        {
          id: "m2",
          value: "500+",
          description: "Happy Orders",
        },
        {
          id: "m3",
          value: "Fresh",
          description: "Ingredients",
        },
        {
          id: "m4",
          value: "Fast",
          description: "Takeout",
        },
        {
          id: "m5",
          value: "Small Town",
          description: "Favorite",
        },
      ]}
      title="Loved by the Community"
      description="The spot you never expect. The flavor you never forget."
    />
  </div>

  <div id="why-come-back" data-section="why-come-back">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Premium Ingredients",
          description: "Fresh toppings. Bold flavor. Quality you can taste in every bite.",
          imageSrc: "http://img.b2bpic.net/free-photo/spread-tomato-sauce-pizza-dough_23-2148357186.jpg",
          imageAlt: "Fresh pizza ingredients",
          buttonIcon: "Salad",
        },
        {
          title: "Cooked Fresh Every Time",
          description: "No shortcuts. Every order is crafted with care and passion.",
          imageSrc: "http://img.b2bpic.net/free-photo/human-hand-seasoning-meat-barbecue-grill_23-2147841079.jpg",
          imageAlt: "Pizza cooking in oven",
          buttonIcon: "ChefHat",
        },
        {
          title: "Hidden Gem Energy",
          description: "People walk in curious and leave obsessed. The surprise delight.",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-with-blurred-effect_23-2148164740.jpg",
          imageAlt: "Cozy restaurant interior",
          buttonIcon: "Sparkles",
        },
        {
          title: "Fast & Friendly",
          description: "Great food and great people. Efficient service with a warm smile.",
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-delivery-man-red-uniform-cap-holding-stack-pizza-boxes-shocked-confused-with-wide-open-mouth-standing-white-wall_141793-48180.jpg",
          imageAlt: "Friendly chef serving food",
          buttonIcon: "Smile",
        },
      ]}
      title="More Than Pizza. More Than Donair."
      description="Discover why our patrons keep coming back to The Pizza House & Donair."
    />
  </div>

  <div id="featured-menu" data-section="featured-menu">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "p1",
          name: "Pepperoni Bacon Pizza",
          price: "$24.99",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-neapolitan-pizza-board_78826-3286.jpg",
          imageAlt: "Pepperoni Bacon Pizza",
          onProductClick: "() => {}",
          isFavorited: true,
        },
        {
          id: "p2",
          name: "Classic Donair",
          price: "$12.99",
          imageSrc: "http://img.b2bpic.net/free-photo/arabic-kebab-sandwich-half-lemon_23-2148651111.jpg",
          imageAlt: "Classic Donair",
          onProductClick: "() => {}",
        },
        {
          id: "p3",
          name: "House Special Pizza",
          price: "$29.99",
          imageSrc: "http://img.b2bpic.net/free-photo/bunch-food-lunch_114579-4318.jpg",
          imageAlt: "House Special Pizza",
          onProductClick: "() => {}",
        },
        {
          id: "p4",
          name: "Family Combo",
          price: "$49.99",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-friends-having-fun_23-2149150926.jpg",
          imageAlt: "Family Combo",
          onProductClick: "() => {}",
        },
        {
          id: "p5",
          name: "Vegetarian Pizza",
          price: "$22.99",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-vegan-pizza-social-post_23-2151895467.jpg",
          imageAlt: "Vegetarian Pizza",
          onProductClick: "() => {}",
        },
        {
          id: "p6",
          name: "Chicken Shawarma",
          price: "$14.99",
          imageSrc: "http://img.b2bpic.net/free-photo/summer-roll-filled-with-colorful-vegetables-white-plate_23-2148138992.jpg",
          imageAlt: "Chicken Shawarma",
          onProductClick: "() => {}",
        },
      ]}
      title="Fan Favorites"
      description="Our most popular dishes, loved by locals and visitors alike."
      buttons={[
        {
          text: "See Full Menu",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "t1",
          name: "Customer Review",
          role: "Local Patron",
          company: "Community",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-with-cutlery-restaurant_169016-21627.jpg",
        },
        {
          id: "t2",
          name: "Abbas Ibdah",
          role: "Regular",
          company: "Community",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-sushi-park-picnic-nature_169016-21839.jpg",
        },
        {
          id: "t3",
          name: "George Favel",
          role: "Food Enthusiast",
          company: "Community",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/very-good-happy-satisfied-young-woman-showing-thumbsup-smiling-positive-approve-like-excelle_1258-163426.jpg",
        },
        {
          id: "t4",
          name: "Allan Shaw",
          role: "Traveler",
          company: "Visitor",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-lunch-together-restaurant_58466-16804.jpg",
        },
        {
          id: "t5",
          name: "Kenneth Cardinal",
          role: "Loyal Customer",
          company: "Community",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-food_23-2149250093.jpg",
        },
        {
          id: "t6",
          name: "Jett Jackson",
          role: "Food Critic",
          company: "Community",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-housewife-shirt-colored-cape-holding-yellow-heart-shape-smiling-green_140725-30376.jpg",
        },
      ]}
      title="People Can't Stop Talking About It"
      description="With a 4.8★ Community Rating, we're loved by locals and have repeat customers daily. See what they're saying!"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Built Around Great Food"
      description="The Pizza House & Donair isn't about fancy buildings or big promises. It's about serving incredible food people genuinely remember. What started as a local favorite became a place people recommend over and over because when the food hits, people talk. And they keep coming back."
    />
  </div>

  <div id="final-conversion" data-section="final-conversion">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Ready to Eat?"
      title="Ready For Your Next Favorite Meal?"
      description="Fresh pizza. Savory donair. Flavor worth coming back for."
      inputPlaceholder="Your Email Address"
      buttonText="Get Updates"
      termsText="By ordering you agree to our terms of service and privacy policy."
      buttons={[
        {
          text: "Order Pickup",
          href: "#",
        },
        {
          text: "Call Now",
          href: "tel:+1234567890",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="The Pizza House & Donair"
      copyrightText="© 2026 The Pizza House & Donair. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "https://instagram.com",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "https://twitter.com",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
