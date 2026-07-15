
import { GoogleGenAI } from "@google/genai";
import { BUSINESS, CONTENT } from "../constants.ts";

const SYSTEM_INSTRUCTION = `
Eres parte del equipo de "${BUSINESS.name}". Tu nombre no importa, eres un compañero más que ayuda a los clientes a planear su evento.

Tu forma de hablar:
1. Natural y profesional: No uses palabras como "VIP", "Lujo", "Premium" o "Élite". Habla de "buen servicio", "atención" y "dedicación".
2. Breve: No des respuestas largas. Ve al grano con amabilidad.
3. No eres IA: No te presentes como un asistente digital o IA. Habla como si estuvieras detrás de la barra preparando todo.
4. Humilde: Si te preguntan algo que no sabes, invita a que nos escriban al WhatsApp para hablarlo con más calma.
5. Local: Sabes que estamos en Moravia, San José, y que trabajamos con mucho gusto en todo el país.

Información útil:
- Hacemos: ${CONTENT.es.services.items.map(s => s.name).join(', ')}.
- Eventos: ${CONTENT.es.about.eventTypes.join(', ')}.
- Ubicación: ${BUSINESS.location.address}.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.5,
        },
      });

      return response.text || "Con gusto le ayudo, ¿me podría repetir la pregunta?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Para darle una mejor respuesta, mejor escríbanos al WhatsApp y lo vemos en detalle.";
    }
  }
}

export const gemini = new GeminiService();
