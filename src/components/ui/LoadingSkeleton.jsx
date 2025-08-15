import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  const { isDark } = useTheme();
  
  const shimmer = {
    initial: { x: '-100%' },
    animate: { x: '100%' },
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear'
    }
  };

  // Theme-aware colors
  const skeletonColors = {
    cardBg: isDark 
      ? 'bg-gradient-to-br from-[#1e2024] via-[#1a1d21] to-[#23272b]' 
      : 'warm-card bg-gradient-to-br from-[#fefcfb] via-[#f7f3f0] to-[#f0ebe6]',
    border: isDark ? 'border-gray-800/50' : 'warm-border border-gray-200/30',
    elementBase: isDark ? 'bg-gray-700/50' : 'skeleton-warm bg-[#f0ebe6]',
    elementLight: isDark ? 'bg-gray-700/30' : 'skeleton-warm bg-[#f0ebe6]/70',
    shimmerColor: isDark 
      ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
      : 'bg-gradient-to-r from-transparent via-black/5 to-transparent'
  };

  const SkeletonCard = () => (
    <div className={`${skeletonColors.cardBg} rounded-xl p-6 border ${skeletonColors.border} theme-transition`}>
      <div className="relative overflow-hidden">
        {/* Image skeleton */}
        <div className={`w-full h-48 ${skeletonColors.elementBase} rounded-lg mb-4 relative overflow-hidden`}>
          <motion.div
            className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
            {...shimmer}
          />
        </div>
        
        {/* Title skeleton */}
        <div className={`h-6 ${skeletonColors.elementBase} rounded mb-3 relative overflow-hidden`}>
          <motion.div
            className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
            {...shimmer}
          />
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className={`h-4 ${skeletonColors.elementLight} rounded relative overflow-hidden`}>
            <motion.div
              className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
              {...shimmer}
            />
          </div>
          <div className={`h-4 ${skeletonColors.elementLight} rounded w-3/4 relative overflow-hidden`}>
            <motion.div
              className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
              {...shimmer}
            />
          </div>
        </div>
        
        {/* Tags skeleton */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-6 w-16 ${skeletonColors.elementLight} rounded-full relative overflow-hidden`}>
              <motion.div
                className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
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
      <div className={`h-4 ${skeletonColors.elementBase} rounded w-24 relative overflow-hidden theme-transition`}>
        <motion.div
          className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
          {...shimmer}
        />
      </div>
      <div className={`h-2 ${skeletonColors.elementLight} rounded relative overflow-hidden theme-transition`}>
        <motion.div
          className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
          {...shimmer}
        />
      </div>
    </div>
  );

  const SkeletonTestimonial = () => (
    <div className="flex flex-col lgl:flex-row gap-8">
      <div className={`w-full lgl:w-[35%] ${skeletonColors.cardBg} p-8 rounded-xl border ${skeletonColors.border} theme-transition`}>
        <div className={`w-28 h-28 ${skeletonColors.elementBase} rounded-full mx-auto mb-4 relative overflow-hidden`}>
          <motion.div
            className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
            {...shimmer}
          />
        </div>
        <div className={`h-6 ${skeletonColors.elementBase} rounded mb-2 relative overflow-hidden`}>
          <motion.div
            className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
            {...shimmer}
          />
        </div>
        <div className={`h-4 ${skeletonColors.elementLight} rounded relative overflow-hidden`}>
          <motion.div
            className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
            {...shimmer}
          />
        </div>
      </div>
      <div className={`w-full lgl:w-[65%] ${skeletonColors.cardBg} p-8 rounded-xl border ${skeletonColors.border} theme-transition`}>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-4 ${skeletonColors.elementLight} rounded relative overflow-hidden`}>
              <motion.div
                className={`absolute inset-0 ${skeletonColors.shimmerColor}`}
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