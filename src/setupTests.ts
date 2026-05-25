import '@testing-library/jest-dom';

// Mock IntersectionObserver for react-vertical-timeline-component in jsdom
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver as any;

// Mock window.scrollTo
window.scrollTo = () => {};
