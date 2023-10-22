import React from "react";
import { ArrowRight } from "../../components/ArrowRight";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="landing-page">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="background">
              <div className="overlap-group">
                <div className="ellipse" />
                <div className="div" />
                <img className="img" alt="Ellipse" src="/img/ellipse-5.svg" />
              </div>
            </div>
            <div className="mood">
              <div className="overlap-2"> 
                <p className="a-mood-tracker-is-a">
                  A mood tracker is a friendly tracker to keep record&nbsp;&nbsp;of a person’s mood at regular intervals
                </p>
                <div className="text-wrapper">Mood Tracker</div>
                <img className="growth" alt="Growth" src="/img/growth-1.png" />
              </div>
              <div className="text-wrapper-2">mood tracker</div>
            </div>
            <div className="meditation">
              <div className="overlap-3">
                <img className="meditation-2" alt="Meditation" src="/img/meditation.png" />
                <p className="p">
                  There are guided meditations, mini-meditations, sleep sounds, SOS meditations for emergencies
                </p>
                <div className="text-wrapper-3">Meditation</div>
              </div>
              <div className="text-wrapper-4">meditation catalog</div>
            </div>
            <div className="games">
              <div className="overlap-4">
                <img className="focused" alt="Focused" src="/img/focused.png" />
                <p className="text-wrapper-5">
                  There are three games tailored to your goals: memory, attention, problem solving, processing speed or
                  flexibility of thinking
                </p>
                <p className="train-for-mind">
                  <span className="span">Train</span>
                  <span className="text-wrapper-6"> for mind</span>
                </p>
              </div>
              <div className="text-wrapper-7">brain exercises</div>
            </div>
            <div className="gratefulnes">
              <div className="overlap-5">
                <p className="text-wrapper-8">
                  Establish a daily practice in wich you remind yourself of the gifts, grace, benefits, and good things
                  you enjoy
                </p>
                <div className="text-wrapper-9">Gratefulnes</div>
                <img className="healthy-happy-plant" alt="Healthy happy plant" src="/img/healthy-happy-plant.png" />
              </div>
              <div className="text-wrapper-10">gratitude practice</div>
            </div>
            <div className="breathing">
              <div className="overlap-6">
                <div className="text-wrapper-11">Mindfulness</div>
                <p className="there-are-exercises">
                  There are&nbsp;&nbsp;exercises for deep breathing, and relaxation techniques, fostering emotional
                  well-being and inner calm
                </p>
                <img className="healthy-brain" alt="Healthy brain" src="/img/healthy-brain.png" />
              </div>
              <div className="text-wrapper-12">deep breathing</div>
            </div>
            <button className="button">
              <div className="text-wrapper-13">Chat now</div>
              <ArrowRight className="arrow-right-instance" />
            </button>
            <p className="text-wrapper-14">
              Take back control of your mental health. Train your brain with pleasure, develop memory, attentions and
              thinkingwith
            </p>
            <div className="text-wrapper-15">Your Mental Health Matter</div>
            <div className="top-bar">
              <div className="overlap-7">
                <button className="div-wrapper">
                  <div className="text-wrapper-16">Sing Up</div>
                </button>
                <div className="how-it-works-about">
                  How it works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About
                  us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resources
                </div>
              </div>
              <div className="text-wrapper-17">Soothe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
