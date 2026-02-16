"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function SystemTimeline() {
  const data = [
    {
      title: "Data Collection & Integration",
      content: (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Advanced network of cameras, sensors, and IoT devices deployed across intersections, highways, and parking areas. Real-time data collection from 1200+ junction points provides comprehensive coverage of traffic patterns 24/7.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-64 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-5xl mb-2">📹</div>
              <p className="text-sm">Image or Video</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI Processing & Analysis",
      content: (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Machine learning algorithms process millions of data points to understand traffic patterns, predict congestion points, and identify bottlenecks. Our AI learns from historical data and real-time feeds to make intelligent decisions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg">✅</span>
                <span>Pattern Recognition & Anomaly Detection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg">✅</span>
                <span>Predictive Congestion Modeling</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg">✅</span>
                <span>Vehicle Behavior Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg">✅</span>
                <span>Flow Optimization Algorithms</span>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-3 rounded-lg border border-purple-200 dark:border-purple-700">
              <p className="text-xs md:text-sm text-purple-900 dark:text-purple-200">
                <strong>Result:</strong> 45% reduction in congestion with 6-second average response time
              </p>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-64 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-5xl mb-2"></div>
              <p className="text-sm">Image or Video</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Smart Optimization & Control",
      content: (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Automated systems dynamically adjust traffic signal timings, suggest optimal routes to drivers, and coordinate emergency response protocols. The system makes split-second decisions to optimize traffic flow and ensure emergency vehicles get priority.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-64 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-5xl mb-2"></div>
              <p className="text-sm">Image or Video</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Continuous Learning & Improvement",
      content: (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              System continuously learns from outcomes, user feedback, and environmental changes. Every optimization cycle feeds back into the models, making them smarter, faster, and more efficient. Monthly performance updates and seasonal adjustments ensure peak performance year-round.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg"></span>
                <span>Real-time Performance Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg"></span>
                <span>Feedback Loop Integration</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg"></span>
                <span>Adaptive Model Tuning</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg"></span>
                <span>Seasonal & Event-based Adjustments</span>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-3 rounded-lg border border-green-200 dark:border-green-700">
              <p className="text-xs md:text-sm text-green-900 dark:text-green-200">
                <strong>Outcome:</strong> Sustained improvement with quarterly model updates and continuous optimization
              </p>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-64 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-5xl mb-2"></div>
              <p className="text-sm">Image or Video</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}
