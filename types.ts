
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  stack: string[];
  lesson?: string;
}

export interface ViralScript {
  hook: string;
  retentionStrategy: string;
  viralityScore: number;
  explanation: string;
  editMarkers: string[];
}

export interface AudioPitchState {
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
}
