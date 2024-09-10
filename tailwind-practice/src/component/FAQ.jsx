import React from 'react';
import FAQItem from './FAQItem';

export default function FAQ() {
  return (
    <div className="mt-10">
      <div className="bg-gray-50 py-10 px-4">
        <div className="text-center text-4xl font-barlow my-4">FAQs</div>
        <div className="flex flex-col items-center space-y-4 py-8">
          <FAQItem
            question="Is it free?"
            answer={
              <>
                The majority of our challenges are free, yes. We do have some
                that are premium and require a{' '}
                <span className="cursor-pointer underline hover:decoration-transparent">
                  Pro subscription
                </span>{' '}
                to access. It will say on each challenge whether they are free
                or premium, so it's easy to tell the difference.
              </>
            }
          />
          <FAQItem
            question="Can I use these projects in my portfolio?"
            answer={
              <>
                Definitely! Please do feel free to use whatever you build in
                your portfolio. Helping developers add professional-looking
                projects to their portfolio was one of the reasons we created
                this platform!
              </>
            }
          />
          <FAQItem
            question="Can I take the challenges as a beginner?"
            answer={
              <>
                For sure! Our challenges have five different levels of
                difficulty. We'd recommend starting with the newbie ones. You
                might also want to start with the HTML & CSS only challenges
                first. As you build up your skills and confidence, you can take
                on more complex projects.
              </>
            }
          />
          <FAQItem
            question="How do I start?"
            answer={
              <>
                You can{' '}
                <span className="cursor-pointer underline hover:decoration-transparent">
                  see all of our challenges here
                </span>{' '}
                To start a challenge, click the "Start Challenge" button on the
                challenge page. This will take you to the Challenge Hub, where
                you can download the starter files, including a README file
                which will help you get set up. We'd recommend starting with one
                of our newbie level challenges. You can then work your way up
                from there.
              </>
            }
          />
          <FAQItem
            question="How can I get help if I'm stuck on a challenge?"
            answer={
              <>
                The best (and quickest) way to get help on a challenge is in our
                Discord server. There are thousands of other developers in
                there, so it's a great place to ask questions. We even have a
                dedicated "help" channel! If you haven't joined yet, you can{' '}
                <span className="cursor-pointer underline hover:decoration-transparent">
                  get an invite to our Discord server here.
                </span>
              </>
            }
          />
          <FAQItem
            question="Can I use libraries/frameworks on these projects?"
            answer={
              <>
                Yes! Our challenges provide professional designs but there are
                no rules on what tools to use. So feel free to use anything you
                like to build your projects.
              </>
            }
          />
          <FAQItem
            question="Am I guaranteed to get hired through the Hiring Platform?"
            answer={
              <>
                We can’t offer any guarantees, unfortunately. You can showcase
                your skills and knowledge to recruiters on our Hiring Platform
                by completing challenges and engaging with the community. This
                may lead to job opportunities, but it also may not. We still
                recommend applying for jobs using traditional channels like job
                boards.
              </>
            }
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-8 py-8">
          <h1 className="text-center text-5xl text-customBlue font-barlow">
            Join 889,140 people building portfolio-worthy projects
          </h1>
          <p className="text-center text-lg text-gray-600 heebo my-8">
            Our highly supportive, positive community is here to help you
            improve your skills. We all try to help each other out wherever
            possible. We’d love to welcome you to our community!
          </p>
          <button className="flex px-6 py-2 text-white barlow-bold-italic bg-rose-600 rounded-3xl hover:bg-rose-700">
            LOG IN WITH GITHUB
            <i class="fab fa-github ml-3 text-lg"> </i>
          </button>
        </div>
      </div>
    </div>
  );
}
