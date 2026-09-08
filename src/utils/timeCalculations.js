/**
 * Utilidades para el cálculo y formateo de la fecha de aniversario.
 * Lee exclusivamente de src/config.js.
 */
import { relationshipStartDate, relationshipStartTime } from '../config.js';

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

/**
 * Valida si la fecha configurada es válida y no es el placeholder YYYY-MM-DD.
 */
export function isValidConfigDate() {
  if (!relationshipStartDate || relationshipStartDate === 'YYYY-MM-DD') {
    return {
      isValid: false,
      isPlaceholder: true,
      message: 'Configura la fecha en src/config.js'
    };
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(relationshipStartDate)) {
    return {
      isValid: false,
      isPlaceholder: false,
      message: 'El formato de fecha debe ser YYYY-MM-DD'
    };
  }

  const [year, month, day] = relationshipStartDate.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);

  if (
    dateObj.getFullYear() !== year ||
    dateObj.getMonth() !== month - 1 ||
    dateObj.getDate() !== day
  ) {
    return {
      isValid: false,
      isPlaceholder: false,
      message: 'La fecha configurada no es una fecha válida en el calendario'
    };
  }

  return {
    isValid: true,
    isPlaceholder: false,
    dateObj
  };
}

/**
 * Obtiene el objeto Date interpretado estrictamente en la zona horaria local.
 */
export function getStartDateTime() {
  const validation = isValidConfigDate();
  if (!validation.isValid) return null;

  const [year, month, day] = relationshipStartDate.split('-').map(Number);
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (relationshipStartTime && typeof relationshipStartTime === 'string') {
    const parts = relationshipStartTime.split(':').map(Number);
    hours = parts[0] || 0;
    minutes = parts[1] || 0;
    seconds = parts[2] || 0;
  }

  return new Date(year, month - 1, day, hours, minutes, seconds);
}

/**
 * Retorna la fecha visible formateada en español natural.
 * Ejemplo: "Desde el 8 de agosto de 2026 ❤️"
 */
export function getFormattedStartDate() {
  const validation = isValidConfigDate();
  if (!validation.isValid) {
    return 'Desde el primer instante ❤️';
  }

  const [year, month, day] = relationshipStartDate.split('-').map(Number);
  const mesNombre = MESES[month - 1];

  return `Desde el ${day} de ${mesNombre} de ${year} ❤️`;
}

/**
 * Calcula la diferencia de tiempo en días, horas, minutos y segundos.
 */
export function calculateElapsedTime() {
  const startDate = getStartDateTime();
  if (!startDate) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isReady: false
    };
  }

  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();

  if (diffMs < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isReady: true,
      isFuture: true
    };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isReady: true,
    isFuture: false
  };
}
