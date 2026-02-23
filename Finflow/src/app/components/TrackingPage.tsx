import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package, MapPin, Truck, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Mock tracking data
  const mockTrackingData = {
    trackingNumber: 'TRK-2024-89234',
    status: 'In Transit',
    currentLocation: 'Phoenix Distribution Center, AZ',
    estimatedDelivery: 'February 20, 2026',
    origin: 'Los Angeles, CA',
    destination: 'Dallas, TX',
    carrier: 'LogiFlow Express',
    weight: '45 lbs',
    dimensions: '24" × 18" × 12"',
    timeline: [
      {
        status: 'Delivered',
        location: 'Dallas, TX',
        date: 'Feb 20, 2026',
        time: '10:30 AM',
        completed: false,
        description: 'Package will be delivered'
      },
      {
        status: 'Out for Delivery',
        location: 'Dallas Distribution Center, TX',
        date: 'Feb 20, 2026',
        time: '6:00 AM',
        completed: false,
        description: 'Package is out for delivery'
      },
      {
        status: 'In Transit',
        location: 'Phoenix Distribution Center, AZ',
        date: 'Feb 19, 2026',
        time: '2:15 PM',
        completed: true,
        description: 'Package arrived at facility'
      },
      {
        status: 'In Transit',
        location: 'Flagstaff Hub, AZ',
        date: 'Feb 19, 2026',
        time: '8:30 AM',
        completed: true,
        description: 'Package in transit'
      },
      {
        status: 'Departed',
        location: 'Los Angeles Warehouse, CA',
        date: 'Feb 18, 2026',
        time: '11:45 PM',
        completed: true,
        description: 'Package departed facility'
      },
      {
        status: 'Picked Up',
        location: 'Los Angeles, CA',
        date: 'Feb 18, 2026',
        time: '3:20 PM',
        completed: true,
        description: 'Package picked up from sender'
      }
    ]
  };

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setIsTracking(true);
      setTimeout(() => {
        setIsTracking(false);
        setShowResults(true);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTrack();
    }
  };

  return (
    <div className="bg-gray-50 pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Track Your Shipment
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get real-time updates on your cargo's journey
            </p>

            {/* Tracking Input */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Enter tracking number (e.g., TRK-2024-89234)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <button
                    onClick={handleTrack}
                    disabled={isTracking}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors disabled:bg-orange-300 whitespace-nowrap"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {isTracking ? 'Tracking...' : 'Track Package'}
                  </button>
                </div>
              </div>
              <p className="text-blue-100 mt-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Try: TRK-2024-89234 for a sample tracking result
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tracking Results */}
      {showResults && (
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Status Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Tracking Number
                    </div>
                    <div className="text-2xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {mockTrackingData.trackingNumber}
                    </div>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
                      <Truck size={20} />
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>{mockTrackingData.status}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Estimated Delivery
                    </div>
                    <div className="text-2xl text-teal-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {mockTrackingData.estimatedDelivery}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <MapPin className="inline mr-1" size={16} />
                      {mockTrackingData.currentLocation}
                    </div>
                  </div>
                </div>

                {/* Shipment Details */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Origin</div>
                    <div className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>{mockTrackingData.origin}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Destination</div>
                    <div className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>{mockTrackingData.destination}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Weight</div>
                    <div className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>{mockTrackingData.weight}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Dimensions</div>
                    <div className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>{mockTrackingData.dimensions}</div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl text-gray-900 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Shipment Timeline
                </h2>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                  <div className="space-y-8">
                    {mockTrackingData.timeline.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative pl-12"
                      >
                        {/* Timeline Dot */}
                        <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          event.completed 
                            ? 'bg-teal-500' 
                            : index === 2 
                              ? 'bg-blue-500 animate-pulse' 
                              : 'bg-gray-300'
                        }`}>
                          {event.completed ? (
                            <CheckCircle className="text-white" size={16} />
                          ) : index === 2 ? (
                            <Clock className="text-white" size={16} />
                          ) : (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>

                        {/* Event Content */}
                        <div className={`rounded-xl p-6 ${
                          event.completed 
                            ? 'bg-gray-50' 
                            : index === 2 
                              ? 'bg-blue-50 border-2 border-blue-200' 
                              : 'bg-gray-50 opacity-60'
                        }`}>
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <h3 className="text-lg text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {event.status}
                            </h3>
                            <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {event.date} at {event.time}
                            </div>
                          </div>
                          <div className="text-gray-600 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <MapPin className="inline mr-1" size={14} />
                            {event.location}
                          </div>
                          <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {event.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Help Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 mt-8 border border-orange-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Need Help with Your Shipment?
                    </h3>
                    <p className="text-gray-700 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Our customer support team is available 24/7 to assist you with any questions or concerns.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Contact Support
                      </button>
                      <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-2 rounded-lg border border-gray-300 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Report an Issue
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {!showResults && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Real-Time Tracking Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Stay informed every step of the way
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin size={32} />,
                  title: 'Live GPS Tracking',
                  description: 'Monitor your shipment\'s exact location in real-time with our GPS-enabled tracking system.'
                },
                {
                  icon: <Clock size={32} />,
                  title: 'Accurate ETAs',
                  description: 'Get precise delivery estimates updated continuously based on current transit conditions.'
                },
                {
                  icon: <Package size={32} />,
                  title: 'Delivery Proof',
                  description: 'Receive confirmation with digital signature and photo proof upon delivery.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
