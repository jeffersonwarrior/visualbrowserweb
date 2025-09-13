import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database, Eye, Video, Download } from 'lucide-react';
import { Terminal } from './terminal';
import { EmailSignup } from '@/components/email-signup';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                AI Web Testing
                <span className="block text-orange-500">With Latest CUA Models</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Advanced browser automation powered by cutting-edge AI. 
                Full video, audio, screenshots and intelligent visual analysis.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900">
                    <span className="line-through text-gray-400">$5/hour</span>
                    <span className="ml-2 text-orange-500">$3/hour</span>
                    <span className="text-sm font-normal text-gray-500 ml-2">Special Launch Price</span>
                  </p>
                </div>
                <EmailSignup />
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Eye className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  AI Visual Analysis
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Powered by latest CUA models for intelligent web page 
                  analysis and automated testing insights.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Video className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Full Media Capture
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Complete video recordings, audio capture, and high-resolution
                  screenshots of all testing sessions.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Download className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Export Everything
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Download all videos, audio recordings, screenshots, and
                  AI analysis reports. Full data ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready for AI Web Testing?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Install the MCP server and start testing with advanced AI models.
                Developed by <strong>Fast AI Development Company</strong> - FastAiDev.xyz
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end space-x-4">
              <a href="https://github.com/fastaidev/visual-browser-mcp" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full"
                >
                  Install MCP Server
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
              <Button
                size="lg"
                className="text-lg rounded-full bg-orange-500 hover:bg-orange-600"
              >
                <span className="line-through mr-2">Coming Soon</span>
                Launch Special
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
