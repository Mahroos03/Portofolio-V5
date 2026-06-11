import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, LiveDemo, TechStack = [], id }) => {
  
  // Handle Live Demo click
  const handleLiveDemo = (e) => {
    if (!LiveDemo || LiveDemo === '#') {
      e.preventDefault();
      alert("Live demo link is not available for this project");
      return false;
    }
    return true;
  };
  
  // Handle Details click
  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
      return false;
    }
    return true;
  };

  return (
    <div className="group relative w-full h-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10 flex flex-col h-full">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-lg h-48">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Tech Stack Tags on Image */}
            {TechStack && TechStack.length > 0 && (
              <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                {TechStack.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-black/60 backdrop-blur-md text-purple-300 border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-4 space-y-3 flex-grow">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent line-clamp-1">
              {Title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
              {Description}
            </p>
            
            {/* Buttons Container */}
            <div className="pt-4 flex items-center gap-3">
              {/* Live Demo Button */}
              {LiveDemo && LiveDemo !== '#' ? (
                <a
                  href={LiveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-medium hover:scale-105 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <button
                  onClick={() => alert("Live demo coming soon!")}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-gray-700/50 text-gray-400 text-sm font-medium cursor-not-allowed"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo Soon</span>
                </button>
              )}
              
              {/* Details Button */}
              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  disabled
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-gray-700/50 text-gray-500 text-sm font-medium cursor-not-allowed"
                >
                  <span>No Details</span>
                </button>
              )}
            </div>
            
            {/* GitHub Link */}
            {ProjectLink && (
              <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 text-gray-500 hover:text-purple-400 text-xs transition-colors w-full"
              >
                <Github className="w-3 h-3" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
        
        <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CardProject;