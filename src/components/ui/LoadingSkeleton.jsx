import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  const shimmer = {
    initial: { x: '-100%' },
    animate: { x: '100%' },
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear'
    }
  };

  const SkeletonCard = () => (
    <div className="bg-gradient-to-br from-[#1e2024] via-[#1a1d21] to-[#23272b] rounded-xl p-6 border border-gray-800/50">
      <div className="relative overflow-hidden">
        {/* Image skeleton */}
        <div className="w-full h-48 bg-gray-700/50 rounded-lg mb-4 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            {...shimmer}
          />
        </div>
        
        {/* Title skeleton */}
        <div className="h-6 bg-gray-700/50 rounded mb-3 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            {...shimmer}
          />
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-700/30 rounded relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              {...shimmer}
            />
          </div>
          <div className="h-4 bg-gray-700/30 rounded w-3/4 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              {...shimmer}
            />
          </div>
        </div>
        
        {/* Tags skeleton */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 bg-gray-700/30 rounded-full relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                {...shimmer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SkeletonSkill = () => (
    <div className="space-y-2">
      <div className="h-4 bg-gray-700/50 rounded w-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          {...shimmer}
        />
      </div>
      <div className="h-2 bg-gray-700/30 rounded relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          {...shimmer}
        />
      </div>
    </div>
  );

  const SkeletonTestimonial = () => (
    <div className="flex flex-col lgl:flex-row gap-8">
      <div className="w-full lgl:w-[35%] bg-gradient-to-br from-[#1e2024] via-[#1a1d21] to-[#23272b] p-8 rounded-xl">
        <div className="w-28 h-28 bg-gray-700/50 rounded-full mx-auto mb-4 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            {...shimmer}
          />
        </div>
        <div className="h-6 bg-gray-700/50 rounded mb-2 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            {...shimmer}
          />
        </div>
        <div className="h-4 bg-gray-700/30 rounded relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            {...shimmer}
          />
        </div>
      </div>
      <div className="w-full lgl:w-[65%] bg-gradient-to-br from-[#1e2024] via-[#1a1d21] to-[#23272b] p-8 rounded-xl">
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 bg-gray-700/30 rounded relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                {...shimmer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return <SkeletonCard />;
      case 'skill':
        return <SkeletonSkill />;
      case 'testimonial':
        return <SkeletonTestimonial />;
      default:
        return <SkeletonCard />;
    }
  };

  return (
    <div className="space-y-6">
      {Array.from({ length: count }, (_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {renderSkeleton()}
        </motion.div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;