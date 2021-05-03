/**
 * The tooltip manager is responsible for managing the visibiltiy of the tooltips,
 * including ensuring that only one tooltip is visible at once, and handling the
 * delay to show or hide a tooltip.
 *
 * This imperative interface is used by TooltipTrigger to show and hide its tooltip
 * based on events on the trigger element.
 *
 * {@docCategory TooltipProvider}
 */
export interface TooltipManager {
  /**
   * Notify the manager that the pointer or focus has entered the trigger.
   * Call this in response to a PointerEnter or Focus event on the trigger.
   *
   * @param args - {@see TriggerTooltipArgs}
   */
  notifyEnterTrigger: (args: TriggerTooltipArgs) => void;

  /**
   * Notify the manager that the pointer or focus has left the trigger.
   * Call this in response to a PointerLeave or Blur event on the trigger.
   *
   * @param trigger - The element that lost focus
   */
  notifyLeaveTrigger: (trigger: HTMLElement) => void;

  /**
   * Notify the manager that the pointer is inside the tooltip.
   * Call this in response to a PointerEnter event on the tooltip itself.
   */
  notifyEnterTooltip: () => void;

  /**
   * Notify the manager that the pointer left the tooltip.
   * Call this in response to a PointerLeave event on the tooltip itself.
   */
  notifyLeaveTooltip: () => void;

  /**
   * Unconditionally hide any tooltip that's currently visible, without a delay.
   */
  hideAll: () => void;
}

/**
 * The arguments to TooltipManager.notifyEnterTrigger
 *
 * {@docCategory TooltipProvider}
 */
export type TriggerTooltipArgs = {
  /**
   * Callback to show or hide the tooltip itself
   */
  setVisible: (visible: boolean) => void;

  /**
   * The element that triggered the tooltip.
   */
  trigger: HTMLElement;

  /**
   * Delay before the tooltip is shown, in milliseconds
   */
  showDelay: number;

  /**
   * Delay before the tooltip is hidden, in milliseconds
   */
  hideDelay: number;
};
