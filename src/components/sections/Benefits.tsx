import React from 'react';
import { motion } from 'framer-motion';
import {
  Sun, Battery, PiggyBank, Sparkles,
  BarChart, Home, Leaf, ThumbsUp
} from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Sun size={40} className="text-secondary" />,
      title: "Energía renovable",
      description: "La energía solar es completamente renovable y sostenible, proporcionando energía limpia para tu hogar."
    },
    {
      icon: <PiggyBank size={40} className="text-secondary" />,
      title: "Reduce tu factura de electricidad",
      description: "Genera tu propia electricidad y reduce significativamente tus gastos mensuales de energía."
    },
    {
      icon: <Battery size={40} className="text-secondary" />,
      title: "Independencia energética",
      description: "Reduce tu dependencia de la red y protege tu dinero frente a los altos costos de la energía."
    },
    {
      icon: <Leaf size={40} className="text-secondary" />,
      title: "Amigable con el medio ambiente",
      description: "Reduce tu huella de carbono y contribuye a un planeta más limpio y saludable."
    },
    {
      icon: <BarChart size={40} className="text-secondary" />,
      title: "Aumenta el valor de tu propiedad",
      description: "Las casas con instalaciones solares suelen venderse por más y más rápido que las que no las tienen."
    },
    {
      icon: <Sparkles size={40} className="text-secondary" />,
      title: "Bajos costos de mantenimiento",
      description: "Los paneles solares requieren un mantenimiento mínimo y suelen durar 25-30 años."
    },
    {
      icon: <Home size={40} className="text-secondary" />,
      title: "Incentivos gubernamentales",
      description: "Aprovecha los créditos fiscales y rebajas disponibles para instalaciones de energía solar."
    },
    {
      icon: <ThumbsUp size={40} className="text-secondary" />,
      title: "Tecnología confiable",
      description: "Los paneles solares modernos son duraderos, eficientes y probados para funcionar en diversos climas."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-primary mb-4">
            ¿Por qué elegir la energía solar?
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Descubre los muchos beneficios de cambiar a la energía solar para tu hogar o negocio
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow"
              variants={item}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="font-montserrat font-semibold text-xl mb-2 text-primary">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;